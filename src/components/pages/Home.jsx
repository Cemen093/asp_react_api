import Search from "../UI/Search";
import Headings from "../UI/Headings";
import {useEffect, useState} from "react";
import VipAds from "../UI/VipAds";
import HitService from "../API/HitService";
import {useFetching} from "../hooks/useFetching";

const Home = () => {
    const [regions, setRegions] = useState([]);
    const [fetchRegions, isRegionsLoading, regionsError] = useFetching(async () => {
        const response = await HitService.getRegions()
        setRegions(response)
    })
    useEffect(() => {
        fetchRegions();
    }, [])
    function handleSubmitSearchForm() {

    }

    const [headings, setHeadings] = useState([]);
    const [fetchHeadings, isHeadingsLoading, headingsError] = useFetching(async () => {
        const response = await HitService.getHeadings()
        setHeadings(response)
    })
    useEffect(() => {
        fetchHeadings();
    }, [])

    const [vipAds, setVipAds] = useState([]);
    const [fetchVipAds, isVipAdsLoading, vipAdsError] = useFetching(async () => {
        const response = await HitService.getAdvertisements().then(ads => ads.filter(el => el.vip === true))
        setVipAds(response)
    })
    useEffect(() => {
        fetchVipAds();
    }, [])

    return (
        <>
            <Search
                handleSubmitSearchForm={handleSubmitSearchForm}
                regions={regions}
                isRegionsLoading={isRegionsLoading}
                regionsError={regionsError}
            />
            <Headings headings={headings} isHeadingsLoading={isHeadingsLoading} headingsError={headingsError}/>
            <VipAds vipAds={vipAds} isVipAdsLoading={isVipAdsLoading} vipAdsError={vipAdsError}/>
        </>
    );
};

export default Home;