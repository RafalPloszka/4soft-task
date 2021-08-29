import { useQuery } from 'react-query';
import { AllAppsTable } from '../components';

const AllApps = () => {
  const fetchAllApps = async () =>
    await (await fetch("https://api.recruitment.4soft.tech/list")).json();
  
  const { data, error, status } = useQuery("allAps", fetchAllApps);
  
  return (
    <div>
      <h2>All apps:</h2>
      <div>
        {status === "error" && <div>{error.message}</div>}

        {status === "loading" && <div>Loading...</div>}

        {status === "success" && <AllAppsTable apps={data} />}
      </div>
    </div>
  );
}

export default AllApps;
