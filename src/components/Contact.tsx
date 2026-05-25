"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // DEMÓ: valódi oldalon ez e-mailt küld vagy CRM-be ír.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kapcsolat" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber/15 text-amber-dark text-xs font-semibold uppercase tracking-wide mb-4">
              Kapcsolat
            </div>
            <h2 className="display text-4xl md:text-5xl text-ink leading-tight">
              Kérjen{" "}
              <em className="not-italic" style={{ color: "#E8930C" }}>ingyenes</em>{" "}
              felmérést
            </h2>
            <p className="mt-4 text-lg text-steel">
              Hagyja meg adatait, és 24 órán belül felvesszük Önnel a
              kapcsolatot egy ingyenes helyszíni felmérés egyeztetéséhez.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+36300000000"
                className="flex items-center gap-4 p-4 rounded-xl border border-line hover:border-ink transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-stone-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="text-xs text-steel">Telefon</div>
                  <div className="font-semibold text-ink">+36 30 000 0000</div>
                </div>
              </a>
              <a
                href="mailto:info@mario-kerites.hu"
                className="flex items-center gap-4 p-4 rounded-xl border border-line hover:border-ink transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-stone-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="text-xs text-steel">E-mail</div>
                  <div className="font-semibold text-ink">info@mario-kerites.hu</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-line">
                <div className="w-11 h-11 rounded-lg bg-stone-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="text-xs text-steel">Munkaterület</div>
                  <div className="font-semibold text-ink">
                    Magyarország egész területe
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-stone-50 border border-line rounded-2xl p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Név" placeholder="Teljes név" required />
              <Field label="Telefonszám" placeholder="+36 30 …" required />
            </div>
            <div className="mt-4">
              <Field label="E-mail" placeholder="pelda@email.hu" type="email" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-ink mb-1.5">
                Melyik szolgáltatás érdekli?
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-line bg-white text-ink text-sm focus:border-amber outline-none">
                <option>Táblás kerítés</option>
                <option>Drótfonatos kerítés</option>
                <option>Kovácsoltvas kerítés</option>
                <option>Csúszókapu</option>
                <option>Nyílókapu</option>
                <option>Kapuautomatika</option>
                <option>Egyéb / nem tudom</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-ink mb-1.5">
                Üzenet
              </label>
              <textarea
                rows={4}
                placeholder="Írja le röviden, mire lenne szüksége…"
                className="w-full px-4 py-3 rounded-lg border border-line bg-white text-ink text-sm focus:border-amber outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors ${
                sent ? "bg-green-600 text-white" : "amber-gradient text-ink"
              }`}
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4" /> Köszönjük, hamarosan keressük!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Felmérést kérek
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-steel text-center">
              Az adatküldés demó funkció — éles oldalon e-mailre továbbítjuk.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1.5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-line bg-white text-ink text-sm focus:border-amber outline-none"
      />
    </div>
  );
}
