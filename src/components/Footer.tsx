import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
import { footerData } from "../constants/footer"

const Footer = () => {
  return (
      <div className=" flex flex-col sm:flex-row gap-8 px-8">
        <div className="w-full sm:w-1/4">
          <h1 className="font-PoppinHeavy text-2xl mb-4">Market-<i>X</i></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="flex gap-x-4 items-center mt-4">
            <FaFacebook className="size-8" />
            <FaInstagram className="size-8" />
            <FaTwitter className="size-8" />
            <FaLinkedin className="size-8" />
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {
            footerData.map((footer) => (
              <div key={footer.id}>
                <h2 className="text-xl font-bold mb-2">{footer.title}</h2>

                {/* Each footer content */}
                <div className="flex flex-col gap-y-2 text-gray-500">
                  {
                    footer.content.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}
export default Footer