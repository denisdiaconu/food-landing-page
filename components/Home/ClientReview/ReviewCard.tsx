import React from 'react'

type Props = {
    reviewTitle: string;
    userName: string;
    userImage: string;
    role: string;
}

const ReviewCard = ({ reviewTitle, userName, userImage, role} : Props) => {
  return (
    <div>ReviewCard</div>
  )
}

export default ReviewCard