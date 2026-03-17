import React from 'react'
import Avatar from './Avatar'
import useUserStore from '@/stores/userStore'
import { ActivityIcon, PhotoIcon, VideoIcon } from '@/icons'

function CreatePost() {
  const user = useUserStore(state => state.user)
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className="card-body p-6">
        <div className="flex gap-2">
          <Avatar className='w-11 h-11 rounded-full' imgSrc={user.profileImage}/>
          <button className="btn flex-1 rounded-full justify-start">
            What do you think? {user.firstName}
          </button>
        </div>
        <div className="divider mt-1 mb-0"></div>
        <div className="flex gap-3 justify-between *:flex-1 *:cursor-pointer">
          <div className="flex gap-3 justify-center py-2 rounded-lg hover:bg-gray-300">
            <VideoIcon className='w-6' />
            Live /Stream
          </div>
          <div className="flex gap-3 justify-center py-2 rounded-lg hover:bg-gray-300">
            <PhotoIcon className='w-6' />
            Photo /Video
          </div>
          <div className="flex gap-3 justify-center py-2 rounded-lg hover:bg-gray-300">
            <ActivityIcon className='w-6' />
            Activity
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost