import { ArrowButtonWide } from "../../components/ArrowButtonWide"

const stories = [
    { title: 'The mountains', image: 'bg-mountains', date: 'March 16th 2020', author: 'John Appleseed' },
    { title: 'Sunset Cityscapes', image: 'bg-cityscapes', date: 'April 7th 2020', author: 'Benjamin Cruz' },
    { title: '18 Days Voyage', image: 'bg-18-days-voyage', date: 'April 16th 2020', author: 'Alexei Borodin' },
    { title: 'Architecturals', image: 'bg-architecturals', date: 'April 14th 2020', author: 'Samantha Brooke' },
    { title: 'World Tour 2019', image: 'bg-world-tour', date: 'February 25th 2020', author: 'William Malcolm' },
    { title: 'Unforeseen Corners', image: 'bg-unforeseen-corners', date: 'March 1st 2020', author: 'Michelle' },
    { title: 'King on Africa: Part II', image: 'bg-king-on-africa', date: 'April 3rd 2020', author: 'William Malcolm' },
    { title: 'The Trip to Nowhere', image: 'bg-trip-to-nowhere', date: 'March 4th 2020', author: ' Mohammed Abdul' },
    { title: 'Rage of The Sea', image: 'bg-rage-of-the-sea', date: 'March 11th 2020', author: 'Lamarr Wilson' },
    { title: 'Running Free', image: 'bg-running-free', date: 'March 9th 2020', author: 'Samantha Brooke' },
    { title: 'Behind the Waves', image: 'bg-behind-the-waves', date: 'April 11th 2020', author: 'Timothy Wagner' },
    { title: 'Calm Waters', image: 'bg-calm-waters', date: 'April 9th 2020', author: 'Michelle' },
    { title: 'The Milky Way', image: 'bg-milky-way', date: 'March 21st 2020', author: 'Felicia Rourke' },
    { title: 'Night at The Dark Forest', image: 'bg-dark-forest', date: 'April 7th 2020', author: 'Timothy Wagner' },
    { title: 'Somwarpet’s Beauty', image: 'bg-somwarpet', date: 'March 5th 2020', author: 'Benjamin Cruz' },
    { title: 'Land of Dreams', image: 'bg-land-of-dreams', date: 'March 29th 2020', author: 'Tim Hillenburg' },
]


export const StoriesGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {

            stories.map( (story, index) => {
                const zInd = `z-[${index*10}]`

                return (
                    <article key={index} className={`relative group lg:hover:translate-y-[-24px] duration-200`}>
                        <div className={`relative flex flex-col w-full h-[350px] px-10 justify-end pb-10 ${story.image} bg-no-repeat bg-cover bg-center ${zInd} md:h-[500px]`}>
                            <div className='image absolute w-full h-[350px] top-0 left-0 bg-gradient-to-b from-initial-grey to-end-grey opacity-100 md:h-[500px]'></div>
                            <span className='font-dm-sans text-[13px] text-white z-20 mb-1'>{story.date}</span>
                            <h3 className="font-bold font-dm-sans text-lg text-white leading-[25px] mb-1 z-20">{story.title}</h3>
                            <span className='font-dm-sans text-[13px] text-white z-20'>by {story.author}</span>
                            <hr className='w-full bg-white opacity-25 mt-4 mb-5 z-20'/>
                            <ArrowButtonWide extraStyle={'z-10'}>Read Story</ArrowButtonWide>
                        </div>
                        {/* Colorful rectangle on hover */}
                        <div className="absolute bottom-[-6px] hidden group-hover:block h-[6px] w-full bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF]"></div>
                    </article>
                )
            })
        }
    </div>
  )
}
