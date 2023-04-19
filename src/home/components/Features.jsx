
const features = [
    { svg: 'responsive.svg', title: '100% Responsive', description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.' },
    { svg: 'no-limit.svg', title: 'No Photo Upload Limit', description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.' },
    { svg: 'embed.svg', title: 'Available to Embed', description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ' },
]

export const Features = () => {
  return (
    <div className="w-full flex justify-center">
        <div className='flex flex-col px-[33px] py-20 gap-14 items-end md:px-[20%] md:py-[120px] md:gap-20 lg:flex-row lg:px-[11.5%] lg:gap-[30px] lg:max-w-[1440px] xl:px-[150px]'>
            {
                features.map( (feature, index) => (
                    <article key={index}>
                        <div className='flex flex-col items-center'>
                            {/* Feature image */}
                            <img className='mb-12' src={`features/desktop/${feature.svg}`} alt="" />
                            {/* Feature title */}
                            <h3 className="font-bold font-dm-sans text-lg leading-[25px] mb-4">
                                {feature.title}
                            </h3>
                            {/* Feature description */}
                            <p className="font-dm-sans text-[15px] leading-[25px] text-center opacity-60">
                                {feature.description}
                            </p>
                        </div>
                    </article>
                ))
            }
        </div>
    </div>
  )
}
