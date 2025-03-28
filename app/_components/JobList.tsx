import Image from 'next/image';
import { JobListProps } from '../../utils/type';

function JobList({ job, filters, handleFilterClick }: JobListProps) {
  return (
    <div className={`${job.new && job.featured ? "border-0 border-l-6 border-l-[hsl(180,29%,50%)]" : ""} 
      bg-white w-full max-w-5xl mx-auto mb-18 last:mb-8 lg:mb-8 py-5 px-5 rounded-md shadow-lg relative`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 absolute -top-8 lg:relative lg:top-0">
            <Image 
              src={job.logo} 
              alt="company's logo"
              fill
              className="object-contain"
              priority 
            />
          </div>
          <div className="flex flex-col mt-6 lg:mt-0">
            <div className="flex items-center flex-wrap lg:ms-5">
              <h1 className="text-[hsl(180,29%,50%)] font-bold me-3">{job.company}</h1>
              <p className={`${job.new ? "block" : "hidden"} me-2 py-1 px-2 font-bold rounded-full 
                bg-[hsl(180,29%,50%)] text-[hsl(180,31%,95%)]`}
              >
                NEW!
              </p>
              <p className={`${job.featured ? "block" : "hidden"} py-1 px-2 font-bold rounded-full 
                bg-black text-[hsl(180,31%,95%)]`}
              >
                FEATURED
              </p>
            </div>
            <div className="lg:ms-5 my-1">
              <h1 className="font-bold text-[1.2rem]">{job.position}</h1>
            </div>
            <div className="lg:ms-5 flex items-center flex-wrap mb-2 lg:mb-0">
              <p className="text-[hsl(180,8%,52%))] font-semibold me-8">{job.postedAt}</p>
              <p className="me-8 text-[hsl(180,8%,52%))] font-semibold">{job.contract}</p>
              <p className=" text-[hsl(180,8%,52%))] font-semibold">{job.location}</p>
            </div>
          </div>
        </div>
        <hr className="opacity-20 lg:hidden"/>
        <div className="mt-3 lg:mt-0 flex flex-wrap gap-3">
          {[job.role, job.level, ...job.languages, ...job.tools].map((filter) =>
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`${filters.includes(filter) ? "bg-[hsl(180,29%,50%)] text-[hsl(180,31%,95%)]" : 
                "bg-[hsl(180,31%,95%)] text-[hsl(180,29%,50%)]"} px-4 py-1 font-bold rounded-sm cursor-pointer
                hover:bg-[hsl(180,29%,50%)] hover:text-white`
              }
            >
              {filter}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobList