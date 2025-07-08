export const Form = () => {
  return (
    <div className="font-sans flex justify-evenly px-40 py-25">
      <div className="form w-2/5 rounded-4xl">
        <div className="text-white text-center mx-auto mt-12 block w-3/4">
          <h1 className="font-semibold text-2xl mb-1">Welcome to our community</h1>
          <p className="text-xs/normal font-semibold">“Watch entertaining reels and get rewards for every view. support your favorite creator directly with just a tap.</p>
        </div>
      </div>
      <div className="w-2/5">
        <div className="mt-6">
          <h1 className="font-semibold text-4xl/normal">Join Viberr</h1>
          <p className="font-noraml text-sm/normal w-11/12 text">Turn your scrolls into earning! watch reels, earn rewards, and support creator you love-all in one App</p>
        </div>
        <div className="font-semibold text-xs w-full h-10 rounded-sm flex justify-between category mt-5">
          <button className="text-white btn w-1/3 rounded-lg border-2">Viewer</button>
          <button className="ftext w-1/3">Brand Promoter</button>
          <button className="ftext w-1/3">Content creator</button>
        </div>
        <form className="mt-6">
          <div className="flex flex-col mb-3">
            <label className="font-medium text-xs mb-2">Full name</label>
            <input className="border-2 text-sm p-1 px-3 rounded-sm w-4/5" type="text" placeholder="Viewer name" name="name" />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-medium text-xs mb-2">Email address</label>
            <input className="border-2 text-sm p-1 px-3 rounded-sm w-4/5" type="email" placeholder="Viewer email address" name="email" />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-medium text-xs mb-2">Phone no</label>
            <input className="border-2 text-sm px-3 p-1 rounded-sm w-4/5" type="number" placeholder="Viewer Phone no" name="phone" />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-medium text-xs mb-2">Insta Handler</label>
            <input className="border-2 w-4/5 text-sm px-3 p-1 rounded-sm" type="text" placeholder="Viewer insta id" name="insta" />
          </div>
          <div className="mt-7">
            <button className="font-semibold text-lg text-white btn p-1 rounded-lg w-1/4" type="submit">Join</button>
            <p className="text text-xs/loose">If you already have an account?<span className="blue"> Login</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}
