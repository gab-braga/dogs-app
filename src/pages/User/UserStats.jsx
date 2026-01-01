import React from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api/api";
import Error from "../../components/Helper/Error/Error";
import Loading from "../../components/Helper/Loading/Loading";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

export default () => {
  const { error, data, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;

  return (
    <React.Suspense fallback={<></>}>
      <UserStatsGraphs data={data} />
    </React.Suspense>
  );
}