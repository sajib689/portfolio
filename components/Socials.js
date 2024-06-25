import Link from 'next/link';
import{
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine
} from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link className='hover:text-accent transition-all duration-300 ' target='_blank' href={'https://web.facebook.com/profile.php?id=100008519531471'}>
    <RiFacebookLine/>
    </Link>
    <Link className='hover:text-accent transition-all duration-300 ' target='_blank' href={'https://www.instagram.com/sajib_0979'}>
    <RiInstagramLine/>
    </Link>
    <Link className='hover:text-accent transition-all duration-300 ' target='_blank' href={`https://www.linkedin.com/in/sajib-babu`}>
    <RiLinkedinLine/>
    </Link>
    <Link className='hover:text-accent transition-all duration-300 ' target='_blank' href={'https://github.com/sajib689'}>
    <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
