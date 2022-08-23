// import './NewActivity.css'
import { useState } from 'react'
import EditActivityForm from '../../components/EditActivity/EditActivity'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import axiosInstance from '../../configs/axios';
const EditActivity = () => {
    let { activity_id } = useParams()
    const [selectedActivity, setSelectedActivity] = useState();

    useEffect(() => {
        console.log(`getting ${activity_id}'s info`)
        axiosInstance.get(`user/activities/${activity_id}`)
            .then(response => {
                setSelectedActivity(response.data)
                console.log(response.data)
            }).then(() => console.log('done'))
    }, [])

    return (
        <div className="new-activity">
        <h1>Update Activity</h1>
        { selectedActivity &&
          <EditActivityForm
            activity_id={activity_id}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            />
        }
      </div>
    )
}

export default EditActivity