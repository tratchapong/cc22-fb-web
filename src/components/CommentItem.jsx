import { toast } from 'react-toastify'
import Avatar from './Avatar'
import usePostStore from '@/stores/postStore'
import useUserStore from '@/stores/userStore'

function CommentItem(props) {
  const { comment } = props
  const user = useUserStore(state => state.user)
  const deleteComment = usePostStore(state => state.deleteComment)

  const hdlDeleteComment = async () => {
    try {
      const resp = await deleteComment(comment.id)
    } catch (err) {
      console.dir(err)
      const errMsg = err.response?.data.message || err.message
      toast.error(errMsg)
    }
  }
  return (
    <div className='flex gap-2 relative'>
      {user.id === comment.userId && (
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={hdlDeleteComment} >
          <span className='text-sm'>&#9940;</span>
        </button>
      )}
      <Avatar className='w-11 h-11 rounded-full'
        imgSrc={comment.user?.profileImage}
      />
      <div className="flex flex-col bg-slate-100 flex-1 rounded-lg p-1 px-2 text-xs leading-5">
        <div className="font-bold">{comment.user?.firstName} {comment.user?.lastName}</div>
        <p>{comment.message}</p>
      </div>
    </div>
  )
}

export default CommentItem