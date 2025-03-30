import React, { useEffect, useState } from 'react';
import { useFetchProductsByIdQuery } from '../../../redux/Features/products/productsApi';
import { usePostReviewMutation } from '../../../redux/Features/reviews/reviewsApi';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostAReview = ({ isModalOpen, handleClose }) => {
    const { id } = useParams();
    const { user } = useSelector((state) => state.auth);
    
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    
    const { refetch } = useFetchProductsByIdQuery(id, { skip: !id });
    const [postReview] = usePostReviewMutation();

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
         // Check for missing fields
    if (!comment.trim()) {
        alert("Please write a review!");
        return;
    }
    if (rating === 0) {
        alert("Please give a rating before submitting!");
        return;
    }
    if (!user || !user._id) {
        alert("User not found. Please log in to post a review.");
        return;
    }
    if (!id) {
        alert("Product ID is missing. Please try again.");
        return;
    }
        
       
        const newComment = {
            comment: comment,
            rating: rating,
            userId: user,  
            productId: id,     
        };

        try {
            await postReview(newComment).unwrap();
            alert("Comment posted successfully!!");
            setComment("");
            setRating(0);
            refetch();
            handleClose(); 
        } catch (error) {
            alert(error.message);
        }
    };

    // Handle outside click to close modal
    const handleOutsideClick = (e) => {
        if (e.target.id === "modal-overlay") {
            handleClose();
        }
    };
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto"; 
        };
    }, [isModalOpen]);

    return (
        <div 
            id="modal-overlay" 
            className={`fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-80 ${isModalOpen ? "block" : "hidden"}`} 
            onClick={handleOutsideClick}
        >
            <div 
                className='bg-white p-6 rounded-md shadow-lg w-96 z-50' 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <h2 className='text-lg font-medium'>Post A Review</h2>
                <div className='flex items-center mb-4'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star}
                            onClick={() => handleRating(star)}
                            className='cursor-pointer text-yellow-500 text-lg'>
                            {rating >= star ? (<i className='ri-star-fill'></i>) : (<i className='ri-star-line'></i>)}
                        </span>
                    ))}
                </div>
                <textarea 
                    className="w-full p-2 border rounded-md mb-4" 
                    placeholder="Write your review..." 
                    value={comment} 
                    rows="4"
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="flex justify-end gap-2">
                    <button onClick={handleClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default PostAReview;
