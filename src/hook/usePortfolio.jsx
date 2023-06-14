import { useQuery } from '@tanstack/react-query';

const usePortfolio = () => {
    const { data: portfolio = [], refetch } = useQuery({
        queryKey: ['portfolio'],
        queryFn: async () => {
            const res = await fetch('portfolio.json')
            return res.json();
        }
    })
    return [portfolio, refetch]
};

export default usePortfolio;