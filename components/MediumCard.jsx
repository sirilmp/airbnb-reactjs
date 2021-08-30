import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
      <div className="relative w-80 h-80">
        <Image className='rounded-xl' src={img} layout="fill" />
      </div>
      <h3 className='text-xl font-semibold mt-3'>{title}</h3>
    </div>
  );
}

export default MediumCard;
