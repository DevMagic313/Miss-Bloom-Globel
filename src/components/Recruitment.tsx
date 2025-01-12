import React, { useState, useEffect } from 'react';
import { Mail, Phone, X } from 'lucide-react';

export default function Recruitment() {
  const [showFeePopup, setShowFeePopup] = useState(false);
  const [showEventsPopup, setShowEventsPopup] = useState(false);

  // Disable background scrolling when popup is open
  useEffect(() => {
    if (showFeePopup || showEventsPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showFeePopup, showEventsPopup]);

  const toggleFeePopup = () => setShowFeePopup(!showFeePopup);
  const toggleEventsPopup = () => setShowEventsPopup(!showEventsPopup);

  const closePopup = () => {
    setShowFeePopup(false);
    setShowEventsPopup(false);
  };

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Miss Bloom Global National Director Recruitment</h2>
        <h3 className="text-xl text-center text-purple-600 mb-8">Become a Part of Our Global Movement</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Responsibilities</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Recruit and select national representatives
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Organize national pageants
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Develop marketing strategies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Collaborate with the international team
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Benefits</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Be part of a global movement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Develop leadership skills
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Network with professionals
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Enjoy exclusive incentives
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h4 className="text-xl font-bold mb-4 text-center">How to Apply</h4>
          <div className="space-y-4">
            <p className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:missbloomglobal@gmail.com" className="text-purple-600 hover:text-purple-800">
                missbloomglobal@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp: +233598725709
            </p>
            <p className="text-center font -semibold">
              Application Deadline: April 30th, 2025
            </p>
          </div>

          {/* Buttons for Registration Fee and Pre-Pageant Events */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={toggleFeePopup}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Registration Fee
            </button>
            <button
              onClick={toggleEventsPopup}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Pre-Pageant Events
            </button>
          </div>

          {/* Popup for Registration Fee */}
          {showFeePopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300" onClick={closePopup}>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md transition-transform transform scale-100 overflow-y-auto max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <button onClick={closePopup} className="absolute top-2 right-2 text-gray-600">
                  <X className="w-5 h-5" />
                </button>
                <h4 className="text-xl font-bold mb-4">Registration Fee Information</h4>
                <p>Yes, the registration fee for contestants and National Directors are typically different.</p>
                <h5 className="font-bold mt-4">Contestant Registration Fee</h5>
                <ul>
                  <li>Amount: $100</li>
                  <li>Purpose: Covers administrative costs, contestant materials, and other expenses related to the pageant.</li>
                  <li>Payment: Contestants pay the registration fee as part of the online or offline registration process.</li>
                </ul>
                <h5 className="font-bold mt-4">National Director Registration Fee</h5>
                <ul>
                  <li>Amount: $1,000</li>
                  <li>Purpose: Covers the cost of the National Director's license, training, and support, as well as other expenses related to promoting the pageant in their country.</li>
                  <li>Payment: National Directors pay the registration fee as part of their agreement to participate in the pageant.</li>
                </ul>
                <h5 className="font-bold mt-4">Additional Fees</h5>
                <ul>
                  <li>Contestant Participation Fee: An additional fee ($500) may be required for contestants to participate in the pageant, covering costs such as accommodations, food, and transportation.</li>
                  <li>National Director Renewal Fee: National Directors may need to pay a renewal fee ($2,000) to maintain their license and participate in future pageants.</li>
                </ul>
                <button onClick={closePopup} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">Close</button>
              </div>
            </div>
          )}

          {/* Popup for Pre-Pageant Events */}
          {showEventsPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300" onClick={closePopup}>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md transition-transform transform scale-100 overflow-y-auto max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <button onClick={closePopup} className="absolute top-2 right-2 text-gray-600">
                  <X className="w-5 h-5" />
                </button>
                <h4 className="text-xl font-bold mb-4">Pre-Pageant Events Outline</h4>
                <h5 className="font-bold">National Director Recruitment (January-April)</h5>
                <ul>
                  <li>Recruitment announcement</li>
                  <li>Application and selection process</li>
                  <li>National Director onboarding and orientation</li>
                </ul>
                <h5 className="font-bold mt-4">Contestant Recruitment (May-July)</h5>
                <ul>
                  <li>Contestant application process</li>
                  <li>National Director support and guidance</li>
                  <li>Contestant selection and announcement</li>
                </ul>
                <h5 className="font-bold mt-4">Pageant Week (October-November)</h5>
                <ul>
                  <li >Day 1-2: Arrival and Check-in</li>
                  <li>Day 3-4: Rehearsals and Pre-Pageant Events</li>
                  <li>Day 5: Grand Finale</li>
                  <li>Day 6: Post-Pageant Events</li>
                </ul>
                <h5 className="font-bold mt-4">Post-Pageant Activities</h5>
                <ul>
                  <li>Winner's Year</li>
                  <li>National Director and Contestant Follow-up</li>
                </ul>
                <button onClick={closePopup} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}