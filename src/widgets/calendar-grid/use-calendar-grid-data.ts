import { useGetEventsForPublicUsersQuery } from '../../shared/api/publicUserPlannerApi';

export const useCalendarGridData = (startDateId: string, endDateId: string) => {
  const data = useGetEventsForPublicUsersQuery({
    startDateId,
    endDateId
  });

  return { 
    data: data.data, 
    isLoading: data.isLoading, 
    isSuccess: data.isSuccess
  };
}
