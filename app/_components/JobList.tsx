import Image from 'next/image';
import { JobListProps } from '../../utils/type';

function JobList({ job }: JobListProps) {
  // const { id, company, logo, new, featured, position, role, level, postedAt, contract, location, languages, tools } = jobs
  
  return (
    <div className={`${job.new && job.featured ? "border-0 border-l-6 border-l-[hsl(180,29%,50%)] rounded-bl-lg rounded-tl-lg" : ""} 
      bg-white max-w-5xl mx-auto mt-8 py-5 px-5`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={job.logo} alt="banner" layout="intrinsic" width={80} height={80}  className="h-auto" priority />
          <div className="flex items-center">
            <p>{job.company}</p>
            <p className="text-gray-500">{job.new ? "NEW" : ""}</p>
            <p className="text-gray-500">{job.featured ? "FEATURED" : ""}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList