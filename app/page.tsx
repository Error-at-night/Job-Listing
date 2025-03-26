import { Jobs } from "@/utils/type";
import JobList from "./_components/JobList";

export default async function Home() {
  const jobs = await fetch("http://localhost:3001/jobs")

  const jobsData: Jobs[] = await jobs.json()

  return (
    <ul>
      {jobsData.map((job) => (
        <JobList key={job.id} jobs={job}/>
      ))}
    </ul>
  );
}
