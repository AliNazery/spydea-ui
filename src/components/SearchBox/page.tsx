import Link from 'next/link'

export default function SearchBox() {
  return (
    <section className="p-4 bg-yellow-200 grid grid-cols-2 items-center">
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Enter Your Email Address" className="border-2 border-gray-300 px-4 py-2 rounded w-full"/>
        <button className="bg-black text-white px-4 py-2 rounded">Get A Quote</button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Supported</h2>
        <div className="flex items-center space-x-4">
          {/* Replace these divs with your actual icons */}
          <div>Icon 1</div>
          <div>Icon 2</div>
          <div>Icon 3</div>
          <div>Icon 4</div>
        </div>
        <ul className="list-none mt-4">
          <li className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span>Works Anywhere</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span>Get Rewarded</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span>No Hidden Fees</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
