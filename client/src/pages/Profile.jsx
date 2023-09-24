import React , {useEffect, useState} from 'react'
import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components';

const Profile = () => {

  const { address , contract,  getUserCampaigns } = useStateContext();
  const [isLoading , setIsLoading] = useState(false);
  const [campaigns , setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    console.log(campaigns);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  } , [address, contract]);

  return (
    <DisplayCampaigns
      title = "All Campaigns"
      isLoading = {isLoading}
      campaigns = {campaigns}
    />
  )
}

export default Profile
