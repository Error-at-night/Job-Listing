import { Jobs } from "@/utils/type"
import JobBoard from "./_components/JobBoard"

export default async function Home() {
  let jobsData: Jobs[] = [];

  try {
    const res = await fetch("http://localhost:3001/jobs")

    if (!res.ok) {
      throw new Error("Could not fetch the job list")
    }

    jobsData = await res.json()
    
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <JobBoard jobsData={jobsData} />
    </>
  )
}
