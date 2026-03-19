import { useAutoAnimate } from '@formkit/auto-animate/react';
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

function CommentContainer(props) {
	const { postId, comments } = props
	const [parent] = useAutoAnimate();
	return (
		<div ref={parent} className='flex flex-col gap-3'>
			<div className="text-xs">see all comments</div>
			{ comments.map(el => (
				<CommentItem key={el.id} comment={el} />
			))}
			<CommentForm postId={postId} />
		</div>
	)
}

export default CommentContainer