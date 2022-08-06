import { StarIcon } from "@heroicons/react/solid"

export const GoogleReviews = () => {
    return <div className="flex justify-center">
    <a
      className="btn btn-primary mb-4 flex items-center space-x-2"
      href="https://www.google.com/search?q=loyal+bytes+global+it+services&rlz=1C1CHZN_enIN988IN988&oq=loyal+bytes+globa&aqs=chrome.0.35i39j46i175i199i512j69i57j0i390l3j69i64j69i60.6034j0j7&sourceid=chrome&ie=UTF-8#cobssid=s&lrd=0x3be7c86cc2e6ce63:0x9cbe8c2b76f6cf4e,1"
      target={"_blank"}
    >
      <span>Google Reviews</span>
      <span>
        <StarIcon className="h-4 w-4 text-orange-50" />
      </span>
    </a>
    </div>
}