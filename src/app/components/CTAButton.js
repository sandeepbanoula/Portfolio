export default function CTAButton({ actionLink, actionText }) {
    return(
        <div className="btn w-fit border-black dark:border-white">
            <a href={actionLink} className="inline-block bg-green-500 px-7 py-3 text-xl text-white dark:text-black lg:text-2xl">{actionText}</a>
        </div>
    );
}