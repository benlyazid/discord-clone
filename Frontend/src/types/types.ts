
export type RoomType = {
	_id: string;
	name: string;
	createdBy: string;
	members: string[];
	createdAt: Date;
	updatedAt: Date;
	messages: string[];
}


export type UserType = {
	_id: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
}

export type AuthUserType = {
	access_token: string;
	username: string;
	userId: string;
}
