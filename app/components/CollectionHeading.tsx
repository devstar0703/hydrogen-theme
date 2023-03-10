import { useState } from "react"
import { Switch } from "@headlessui/react"

export function CollectionHeading({
  heading
}: {
  heading: String
}) {
  const [choice, setChoice] = useState<boolean>(false);

  return (
    <div className="flex flex-row flex-wrap justify-between items-center">
      {/* Heading */}
      <div className="w-full md:w-5/12 pb-4">
        <h1 className="text-dark-blue text-cusheading lg:text-50 font-semibold">{heading}</h1>
      </div>
      {/* Filter */}
      <div className="w-full md:w-7/12 pb-1 flex flex-row justify-end">
        <div className="toggle-btn mt-6 mr-12 flex flex-row gap-1">
          <span className={`${!choice ? 'opacity-100' : 'opacity-50'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" width="25px" height="25px" viewBox="-4.5 -3.5 25 25" enableBackground="new -4.5 -3.5 25 25" xmlSpace="preserve">
              <path fill="#174860" d="M14.699,10.904C13.961,10.172,13.145,9.532,12.267,9c0.747-1.041,1.124-2.324,1.067-3.628  c-0.066-1.408-0.627-2.739-1.575-3.733S9.546,0.061,8.211,0H8C6.673,0,5.393,0.522,4.411,1.464C3.43,2.406,2.816,3.7,2.69,5.094  S2.937,7.88,3.733,9c-0.879,0.529-1.696,1.166-2.435,1.896c-0.83,0.821-1.3,1.968-1.299,3.167v1.125  c0,0.746,0.281,1.461,0.781,1.988C1.281,17.703,1.959,18,2.667,18h10.667c0.707,0,1.385-0.297,1.885-0.824S16,15.934,16,15.188  v-1.125C15.998,12.865,15.527,11.723,14.699,10.904z M13.867,15.188c0,0.149-0.057,0.292-0.156,0.398  c-0.1,0.104-0.236,0.164-0.377,0.164H2.667c-0.295,0-0.534-0.252-0.534-0.562v-1.125c0-0.574,0.226-1.123,0.624-1.516  c0.941-0.94,2.043-1.683,3.248-2.188c0.193-0.075,0.36-0.21,0.478-0.388c0.118-0.177,0.182-0.389,0.183-0.605V9.301  c0.003-0.346-0.158-0.67-0.429-0.863C5.469,7.9,4.958,7.039,4.835,6.075s0.154-1.937,0.76-2.669C6.202,2.673,7.078,2.252,8,2.25  h0.128c0.8,0.04,1.558,0.392,2.124,0.987C10.82,3.833,11.158,4.63,11.2,5.473c0.046,1.188-0.504,2.314-1.448,2.964  C9.48,8.635,9.323,8.964,9.334,9.312v0.054C9.336,9.582,9.4,9.791,9.518,9.968c0.119,0.177,0.285,0.311,0.477,0.386  c1.205,0.505,2.307,1.248,3.248,2.188c0.4,0.394,0.626,0.945,0.625,1.521V15.188z"/>
            </svg>
          </span>
          <Switch
            checked={choice}
            onChange={setChoice}
            className="relative inline-flex h-[23px] w-[43px] shrink-0 cursor-pointer rounded-full border-2 border-dark-blue"
          >
            <span className="sr-only">Select choice</span>
            <span aria-hidden="true" className={`${choice ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-[19px] w-[19px] transform rounded-full bg-dark-blue transition duration-200 ease-in-out`}></span>
          </Switch>
          <span className={`${choice ? 'opacity-100' : 'opacity-50'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" width="30px" height="25px" viewBox="0 -3.5 30 25" enableBackground="new 0 -3.5 30 25" xmlSpace="preserve">
              <path fill="#174860" d="M28.656,10.904C27.919,10.172,27.103,9.532,26.225,9c0.746-1.041,1.123-2.324,1.066-3.628  c-0.065-1.408-0.627-2.739-1.574-3.733C24.769,0.646,23.503,0.061,22.168,0h-0.211c-1.326,0-2.606,0.522-3.588,1.464  c-0.982,0.942-1.596,2.236-1.721,3.63C16.522,6.487,16.895,7.88,17.69,9c-0.879,0.529-1.696,1.166-2.434,1.896  c-0.106,0.104-0.188,0.229-0.282,0.343c-0.092-0.111-0.172-0.232-0.275-0.334C13.961,10.172,13.145,9.532,12.267,9  c0.747-1.041,1.124-2.324,1.067-3.628c-0.065-1.408-0.627-2.739-1.575-3.733S9.546,0.061,8.211,0H8C6.673,0,5.393,0.522,4.411,1.464  C3.43,2.406,2.816,3.7,2.69,5.094S2.937,7.88,3.733,9c-0.879,0.529-1.696,1.166-2.435,1.896c-0.83,0.821-1.3,1.968-1.299,3.167  v1.125c0,0.746,0.281,1.461,0.781,1.988C1.281,17.703,1.959,18,2.667,18h10.667c0.603,0,1.177-0.227,1.645-0.616  C15.447,17.773,16.021,18,16.624,18h10.667c0.707,0,1.385-0.297,1.885-0.824c0.501-0.527,0.781-1.242,0.781-1.988v-1.125  C29.955,12.865,29.484,11.723,28.656,10.904z M13.867,15.188c0,0.149-0.056,0.292-0.156,0.398c-0.1,0.104-0.236,0.164-0.377,0.164  H2.667c-0.295,0-0.534-0.252-0.534-0.562v-1.125c0-0.574,0.226-1.123,0.624-1.516c0.941-0.94,2.043-1.683,3.248-2.188  c0.193-0.075,0.36-0.21,0.478-0.388c0.118-0.177,0.182-0.389,0.183-0.605V9.301c0.003-0.346-0.158-0.67-0.429-0.863  C5.469,7.9,4.958,7.039,4.835,6.075s0.154-1.937,0.76-2.669C6.202,2.673,7.078,2.252,8,2.25h0.128c0.8,0.04,1.557,0.392,2.125,0.987  C10.82,3.833,11.158,4.63,11.2,5.473c0.046,1.188-0.504,2.314-1.448,2.964C9.48,8.635,9.323,8.964,9.333,9.312v0.054  C9.335,9.582,9.4,9.791,9.518,9.968s0.285,0.311,0.477,0.386c1.205,0.505,2.307,1.248,3.248,2.188  c0.4,0.394,0.625,0.945,0.624,1.521V15.188z M27.824,15.188c0,0.149-0.057,0.292-0.156,0.398c-0.1,0.104-0.236,0.164-0.377,0.164  H16.624c-0.294,0-0.533-0.252-0.533-0.562v-1.125c-0.001-0.574,0.226-1.123,0.624-1.516c0.941-0.94,2.043-1.683,3.248-2.188  c0.193-0.075,0.359-0.21,0.479-0.388c0.117-0.177,0.182-0.389,0.183-0.605V9.301c0.003-0.346-0.157-0.67-0.429-0.863  c-0.77-0.538-1.28-1.398-1.402-2.362c-0.123-0.964,0.153-1.937,0.76-2.669c0.605-0.733,1.482-1.154,2.404-1.156h0.129  c0.799,0.04,1.557,0.392,2.124,0.987s0.905,1.393,0.947,2.236c0.046,1.188-0.504,2.314-1.448,2.964  c-0.271,0.198-0.429,0.527-0.418,0.875v0.054c0.002,0.216,0.066,0.425,0.185,0.602s0.284,0.311,0.477,0.386  c1.204,0.505,2.307,1.248,3.248,2.188c0.399,0.394,0.626,0.945,0.624,1.521V15.188z"/>
            </svg>            
          </span>
        </div>
        <div className="filter-btn bg-dark-blue text-white py-2 px-[30px] mt-4 text-xs font-semibold uppercase flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" width="23px" height="11px" viewBox="0 0 23 11" enableBackground="new 0 0 23 11" xmlSpace="preserve">
            <rect fill="#FFFFFF" width="23" height="1"/>
            <rect x="3" y="5" fill="#FFFFFF" width="17" height="1"/>
            <rect x="6" y="10" fill="#FFFFFF" width="11" height="1"/>
          </svg>
          <span>filtri</span>
        </div>
      </div>
    </div>
  )
}