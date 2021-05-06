import Image from 'next/image';
const PrimaryButton = ({ src, end, title, ...props }) => (
  <div className='box-border h-32 p-4 text-center relative'
    {...props}
  >
    <div className="text-center">
      <img className="h-10 w-10 inline" src={src} alt="" />
    </div>
    <div className={end == 'y' ? 'absolute right-0 hidden' : 'absolute right-0'}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>

    <p className="text-center">{title}</p>
  </div>
)

export default PrimaryButton