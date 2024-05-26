import React from 'react'

export default function NotFound() {
  return (
<main>
    <section className="section py-40">
        <div className="container">
            <div className="flex flex-wrap justify-center">
                <div className="text-center sm:col-10 md:col-8 lg:col-6">
                    <img alt="page not found" loading="lazy" width="630" height="320" decoding="async" data-nimg="1" className="mb-8 w-full" src='../images/notFound/404.png'/>
                    <h1 className="h2 mb-4">Something Went Wrong!</h1>
                    <div className="content">
                        <p>The page you are looking for is not found!</p>
                    </div>
                    <a className="btn btn-primary mt-8" href="/">Back To Home</a>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}
