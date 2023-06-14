import { useQuery } from '@tanstack/react-query';

const useServices = () => {
    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('services.json')
            return res.json();
        }
    })
    return [services, refetch]
};

export default useServices;