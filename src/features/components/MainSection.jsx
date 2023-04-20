
const features = [
    { svg: 'responsive.svg', title: '100% Responsive', description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.' },
    { svg: 'no-limit.svg', title: 'No Photo Upload Limit', description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.', end: true },
    { svg: 'embed.svg', title: 'Available to Embed', description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ' },
    { svg: 'custom-domain.svg', title: 'Custom Domain', description: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!', start: true },
    { svg: 'boost-exposure.svg', title: 'Boost Your Exposure', description: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.' },
    { svg: 'drag-drop.svg', title: 'Drag & Drop Image', description: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.' },
]

export const MainSection = () => {
  return (
    <div className="w-full flex justify-center">
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[33px] py-20 gap-14 md:px-[5%] md:py-[112px] lg:py-[160px] lg:px-[11.5%] lg:max-w-[1440px] xl:px-[165px]'>
            {
                features.map( (feature, index) => {

                    let position = '';

                    if ( feature.end ) {
                        position = 'self-end'
                    } else if ( feature.start ) {
                        position = 'self-start'
                    }

                    return (
                        <article key={index} className={`${position}`}>
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
                )})
            }
        </div>
    </div>
  )
}
