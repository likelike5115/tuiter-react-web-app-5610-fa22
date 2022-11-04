import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Ke',
    lastName: 'Li',
    handle: 'keli',
    profilePicture: '../../images/astronaut.jpeg',
    bannerPicture: '../../images/pancake.jpg',
    bio: 'Student, like animal, Software Engineer',
    website: '',
    location: 'San Jose, California',
    dateOfBirth : '02/02/1999',
    dateJoined: '11/2022',
    followingCount: 12,
    followersCount: 99
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;