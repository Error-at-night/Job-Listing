"use client"

import { useSearchParams, useRouter } from "next/navigation"
import JobList from "./JobList"
import { Jobs } from "@/utils/type"
import Image from "next/image"

interface JobBoardProps {
  jobsData: Jobs[]
}

function JobBoard({ jobsData }: JobBoardProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const filters = searchParams.getAll("filter")

  const filteredJobs = filters.length ? jobsData.filter((job) => [job.role, job.level, ...job.languages, ...job.tools]
    .some((item) => filters.includes(item))) : jobsData

  function handleFilterClick(filter: string) { 
    const updatedFilters = filters.includes(filter) ? filters.filter((f) => f !== filter) : [...filters, filter]
  
    const queryString = updatedFilters.length ? `?${updatedFilters.map((f) => `filter=${f}`).join("&")}` : ""
 
    router.push(queryString)
  }

  function handleFilter(filterToRemove: string) {
    const newFilters = filters.filter((f) => f !== filterToRemove)
    const queryString = newFilters.length ? `?${newFilters.map((f) => `filter=${f}`).join("&")}` : "/"
    router.push(queryString, { scroll: false })
  }

  function handleClear() {
    router.push("/")
  }

  return (
    <div className="container mx-auto">
      {filters.length > 0 && (
        <div className="flex flex-wrap items-center relative top-[-72px] w-full max-w-5xl mx-auto bg-white px-8 py-2 shadow-lg rounded-md mb-[-35px]">
          {filters.map((filter) => 
            <div key={filter} className="flex items-center rounded-bl-sm rounded-tl-sm bg-[hsl(180,31%,95%)] text-[hsl(180,29%,50%)]
              ps-3 me-5 my-3"
            >
              <span className="font-bold">{filter}</span>
              <button
                onClick={() => handleFilter(filter)}
                className="ml-2 bg-[hsl(180,29%,50%)] cursor-pointer text-black hover:bg-black
                  p-3  flex items-center justify-center font-extrabold rounded-br-sm rounded-tr-sm"
              >
                <Image src="/icon-remove.svg" alt="remove-icon" width={13} height={13}/>
              </button>
            </div>
          )}

          <button onClick={handleClear} className="text-[hsl(180,29%,50%)] ms-auto font-bold underline cursor-pointer">
            Clear
          </button>
        </div>
      )}

      {filteredJobs.length > 0 ? 
        filteredJobs.map((job) => <JobList key={job.id} job={job} filters={filters} handleFilterClick={handleFilterClick}/>)
        : 
        <p className="text-center text-gray-500">No job found.</p>
      }
    </div>
  )
}

export default JobBoard;