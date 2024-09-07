import React from "react";

const Aditional = () => {
    return(
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="text-gray-600">
              <span className="font-semibold">Sachin Arora</span> closed a sale worth
              $1,000.
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Sachin Arora</span> joined the CRM platform.
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Sachin Arora</span> has a pending invoice for $500.
            </li>
          </ul>
        </div>
    );
};

export default Aditional;