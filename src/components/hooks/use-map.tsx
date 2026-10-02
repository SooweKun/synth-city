import { toast } from '@/src/components/ui/toast';
import { useQuery } from '@tanstack/react-query';

export const useMap = () => {
  return useQuery({
    queryKey: ['map'],
    queryFn: async () => {
      const map = await fetch('/maps/map-massive.json');

      if (!map.ok) {
        toast.add({
          title: 'Ошибка загрузки карты',
          description: `${map.status}`,
        });
      }

      const map_data = await map.json();

      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(map_data);
        }, 100);
      });
      return data;
    },
  });
};
