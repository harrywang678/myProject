const getCustomerComments = async (customerId) => {};

const getListingComments = async (listingId) => {};

const createComment = async (
	commenterId,
	commenterName,
	listingId,
	comment
) => {};

// below is potentially optional
const updateComment = async (commentId, updatedComment) => {};

const deleteComment = async (commentId) => {};

export { getCustomerComments, getListingComments, createComment };
