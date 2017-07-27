exports = module.exports = function (app, mongoose) {

	var tuis_schema = new mongoose.Schema({
		created_at: {
			type: String
		},
		id: {
			type: Number
		},
		id_str: {
			type: String
		},
		text: {
			type: String
		},
		truncated: {
			type: Boolean
		},
		entities: {
			hashtags: [{
				text: {
					type: String
				},
				indices: [Number]
			}],
			symbols: [{
				text: {
					type: String
				},
				indices: [Number]
			}],
			user_mentions: [{
				screen_name: {
					type: String
				},
				name: {
					type: String
				},
				id: {
					type: Number
				},
				id_str: {
					type: String
				},
				indices: [Number]
			}],
			urls: [{
				url: {
					type: String
				},
				expanded_url: {
					type: String
				},
				display_url: {
					type: String
				},
				indices: [Number]
			}],
			media: [{
				type: {
					type: String
				},
				indices: [Number],
				url: {
					type: String
				},
				media_url: {
					type: String
				},
				display_url: {
					type: String
				},
				id: {
					type: Number
				},
				id_str: {
					type: String
				},
				expanded_url: {
					type: String
				},
				media_url_https: {
					type: String
				}
			}]
		},
		extended_entities: {
			media: [{
				id_str: {
					type: String
				},
				indices: [Number],
				media_url: {
					type: String
				},
				media_url_https: {
					type: String
				},
				url: {
					type: String
				},
				display_url: {
					type: String
				},
				expanded_url: {
					type: String
				},
				type: {
					type: String
				},
			}]
		},
		metadata: {
			iso_language_code: {
				type: String
			},
			result_type: {
				type: String
			}
		},
		source: {
			type: String
		},
		in_reply_to_status_id: {
			type: Number
		},
		in_reply_to_status_id_str: {
			type: String
		},
		in_reply_to_user_id: {
			type: Number
		},
		in_reply_to_user_id_str: {
			type: String
		},
		in_reply_to_screen_name: {
			type: String
		},
		user: {
			statuses_count: {
				type: String
			},
			favourites_count: {
				type: Number
			},
			protected: {
				type: Boolean
			},
			profile_image_url: {
				type: String
			},
			name: {
				type: String
			},
			listed_count: {
				type: String
			},
			description: {
				type: String
			},
			location: {
				type: String
			},
			contributors_enabled: {
				type: String
			},
			verified: {
				type: Boolean
			},
			followers_count: {
				type: Number
			},
			url: {
				type: String
			},
			screen_name: {
				type: String
			},
			display_url: {
				type: String
			},
			geo_enabled: {
				type: Boolean
			},
			friends_count: {
				type: Number
			},
			id_str: {
				type: String
			},
			entities: {
				url: {
					urls: [{
						url: {
							type: String
						},
						expanded_url: {
							type: String
						},
						display_url: {
							type: String
						}
					}]
				},
				description: {
					urls: [{
						url: {
							type: String
						},
						expanded_url: {
							type: String
						},
						display_url: {
							type: String
						}
					}]
				}
			},
			lang: {
				type: String
			},
			time_zone: {
				type: String
			},
			created_at: {
				type: String
			},
			id: {
				type: Number
			},
			profile_background_image_url_https: {
				type: String
			},
			profile_background_image_url: {
				type: String
			}
		},
		coordinates: {
			coordinates: [Number],
			type: {
				type: String
			}
		},
		place: {
			attributes: {
				street_address: {
					type: String
				},
			},
			bounding_box: {
				coordinates: [
					[
						[Number]
					]
				],
				type: {
					type: String
				}
			},
			country: {
				type: String
			},
			country_code: {
				type: String
			},
			full_name: {
				type: String
			},
			id: {
				type: String
			},
			name: {
				type: String
			},
			place_type: {
				type: String
			}
		}

	});

	mongoose.model('Tuitsmodel', tuis_schema);

};