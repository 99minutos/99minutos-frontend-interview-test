import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LaunchesPast, launchesPastQuery } from '../interfaces/LaunchPast';
import { GET_LAUNCHES_PAST } from '../graphql/queries/LaunchesPast';


export const useLaunchesPast = () => {

    const [launchesPast, setLaunchesPast] = useState<LaunchesPast[]>([])
    const [launchSelected, setLaunchSelected] = useState<LaunchesPast | null>(null)
    const { data, loading, error } = useQuery<launchesPastQuery>( GET_LAUNCHES_PAST )

    useEffect(() => {
        if(!loading && !error) {
            setLaunchesPast(data!.launchesPast)
        }
    }, [loading, data, error])

    return {
        launchesPast,
        launchSelected,
        setLaunchSelected
    }
}
