"use client";

import { Download, Forward, Heart } from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Lightbox, lightboxAction } from "@/components/common/lightbox";
import { USER_PHOTOS } from "@/data/user";

import { UserCover, UserCoverFilter } from "../user-cover";
import { UserHeader } from "../user-header";

export default function UserPhotos() {
	const [viewing, setViewing] = useState({ open: false, index: 0 });

	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<UserHeader title="User Photos" page="Photos" />
			<UserCover>
				<UserCoverFilter active>All Photos</UserCoverFilter>
				<UserCoverFilter>Uploaded</UserCoverFilter>
				<UserCoverFilter>Videos</UserCoverFilter>
				<UserCoverFilter>Albums</UserCoverFilter>
				<UserCoverFilter>GIFs</UserCoverFilter>
				<UserCoverFilter className="ml-auto hidden md:block">Add Photos/Videos</UserCoverFilter>
			</UserCover>

			<div className="grid grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-6">
				{USER_PHOTOS.map((photo, index) => (
					<button
						key={photo.thumb}
						type="button"
						onClick={() => setViewing({ open: true, index })}
						className="rounded-xl outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
					>
						<img className="aspect-4/3 w-full cursor-pointer rounded-xl object-cover" src={photo.thumb} alt={`Photo ${index + 1}`} />
					</button>
				))}
			</div>

			<Lightbox
				photos={USER_PHOTOS.map((photo) => photo.full)}
				open={viewing.open}
				index={viewing.index}
				onOpenChange={(open) => setViewing((current) => ({ ...current, open }))}
				actions={
					<>
						<IconButton className={lightboxAction}>
							<Heart />
							<span className="sr-only">Favourite</span>
						</IconButton>
						<IconButton className={lightboxAction}>
							<Forward />
							<span className="sr-only">Share</span>
						</IconButton>
						<IconButton className={lightboxAction}>
							<Download />
							<span className="sr-only">Download</span>
						</IconButton>
					</>
				}
			/>
		</div>
	);
}
