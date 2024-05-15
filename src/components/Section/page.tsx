import SearchBox from "../SearchBox/page"
export default function Section() {
    return (
      <section className="p-4 bg-yellow-200 grid grid-cols-2 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">The smarter ways to save in documents.</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <SearchBox />
        </div>
        <div>
          <img src="../images/brands/banner-image.png" alt="Illustration" className="w-full h-auto"/>
        </div>
      </section>
    )
  }
  