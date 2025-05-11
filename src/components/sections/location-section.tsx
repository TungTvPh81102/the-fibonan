import React from 'react'
import { Badge } from '@/components/ui/badge'

const LocationSection = () => {
  return (
    <section id="vị-trí" className="py-16 md:py-10">
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Vị trí
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Vị trí <span className="text-emerald-600">chiến lược</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            Green Residence sở hữu vị trí đắc địa tại trung tâm thành phố, kết
            nối thuận tiện đến các tiện ích ngoại khu và các tuyến giao thông
            huyết mạch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5669194779753!2d105.9329166744793!3d20.96990018979904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af10b1d758bf%3A0xb5c260056ce54463!2zMzcgxJAuIFLhu6tuZyBUaMO0bmcsIFBo4buRIEjGsOG7m25nIETGsMahbmcsIFbEg24gR2lhbmcsIEjGsG5nIFnDqm4gMTYwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1746985416636!5m2!1svi!2s"
              width="800"
              height="600"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-emerald-700">
                Kết nối thuận tiện
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: 'Sân bay quốc tế',
                    distance: '15 phút di chuyển',
                  },
                  {
                    name: 'Trung tâm thương mại',
                    distance: '5 phút di chuyển',
                  },
                  {
                    name: 'Bệnh viện quốc tế',
                    distance: '10 phút di chuyển',
                  },
                  {
                    name: 'Trường học quốc tế',
                    distance: '7 phút di chuyển',
                  },
                  {
                    name: 'Công viên trung tâm',
                    distance: '3 phút di chuyển',
                  },
                  {
                    name: 'Công viên trung tâm',
                    distance: '3 phút di chuyển',
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between border-b border-emerald-200 pb-2 last:border-0"
                  >
                    <span className="font-medium">{item.name}</span>
                    <Badge
                      variant="outline"
                      className="border-emerald-200 bg-white"
                    >
                      {item.distance}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
