'use client';

import { useEffect } from 'react';
import { trackLead, newLeadId, loadGtagNow, recentLeadFired, LEAD_VALUE_HUF, ADS_LEAD_SEND_TO } from '@/lib/tracking';

/* Biztonsági háló a köszönőoldalon.
 *
 * A konverzió elsődlegesen már az űrlap elküldésekor elmegy (ott még
 * megvan az email a hasheléshez, és a látogató biztosan a lapon van).
 * Itt csak akkor tüzelünk, ha ez valamiért nem történt meg, például mert
 * valaki közvetlen linkkel érkezett a /koszonjuk oldalra.
 *
 * A leadId-vel dedupláljuk: ha az űrlap már elküldte, ez nem küld újra.
 */

export { ADS_LEAD_SEND_TO as ADS_CONVERSION_ID };

export default function AdsConversion() {
  useEffect(() => {
    // A könyvtárat itt nem várakoztatjuk: azonnal kell.
    loadGtagNow();

    let pending: { id: string; email?: string; phone?: string; name?: string; budget?: string } | null = null;
    try {
      const raw = sessionStorage.getItem('ncx_pending_lead');
      if (raw) pending = JSON.parse(raw);
    } catch {}

    if (pending?.id) {
      // Az űrlap már tüzelt ezzel az id-vel: a trackLead dedupál, nem megy ki újra.
      trackLead({
        leadId: pending.id,
        email: pending.email,
        phone: pending.phone,
        name: pending.name,
        budget: pending.budget,
      });
      return;
    }

    // Nincs elmentett lead. Ha viszont pár perce már ment konverzió
    // (tiltott sessionStorage mellett is látjuk), ne számoljunk másodszor.
    if (recentLeadFired()) return;

    // Közvetlen látogatás a köszönőoldalra: inkább legyen meg a konverzió.
    trackLead({ leadId: newLeadId(), value: LEAD_VALUE_HUF });
  }, []);

  return null;
}
