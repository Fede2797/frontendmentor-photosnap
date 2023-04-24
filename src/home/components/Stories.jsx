import { ArrowButtonWide } from "../../components/ArrowButtonWide";

const stories = [
    { image: 'bg-mountains', title: 'The Mountains', author: 'John Appleseed' },
    { image: 'bg-cityscapes', title: 'Sunset Cityscapes', author: 'Benjamin Cruz' },
    { image: 'bg-18-days-voyage', title: '18 Days Voyage', author: 'Alexei Borodin' },
    { image: 'bg-architecturals', title: 'Architecturals', author: 'Samantha Brooke' },
];

export const Stories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {
            stories.map( (story, index) => (
                <article key={index} className="relative group lg:hover:translate-y-[-24px] duration-200">
                    <div className={`relative flex flex-col w-full h-[375px] px-[33px] justify-end pb-10 ${story.image} bg-no-repeat bg-cover bg-center`}>
                        <div className='image absolute w-full h-[375px] top-0 left-0 bg-gradient-to-b from-initial-grey to-end-grey opacity-100 z-10'></div>
                        <h3 className="font-bold font-dm-sans text-lg text-white leading-[25px] pb-1 z-20">{story.title}</h3>
                        <span className='font-dm-sans text-[13px] text-white z-20'>by {story.author}</span>
                        <hr className='w-full bg-white opacity-25 mt-4 mb-5 z-20'/>
                        <ArrowButtonWide extraStyle={'z-10'}>Read Story</ArrowButtonWide>
                    </div>
                    {/* Colorful rectangle on hover */}
                    <div className="absolute bottom-[-6px] hidden group-hover:block h-[6px] w-full bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF]"></div>
                </article>
            ))
        }
    </div>
  )
}
