'use client';

import { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import Image from 'next/image';

interface ProfileData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

function Profile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/users/1'
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const data = await response.json();
        setProfileData(data.data[0]);
      } catch (error) {
        console.error('에러 발생:', error);
        alert(error);
      }
    };
    fetchProfileInfo();
  }, []);

  if (!profileData) {
    return <button className={styles.loginBtn}>로그인</button>;
  }

  return (
    <div className={styles.profileItems}>
      <Image
        className={styles.profileImage}
        src={profileData.image_source}
        alt="Profile"
        width={100}
        height={100}
      />
      <p className={styles.profileEmail}>{profileData.email}</p>
    </div>
  );
}

export default Profile;
