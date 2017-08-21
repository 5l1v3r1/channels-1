// @flow
import React from 'react';
import Status from './Status';
import SearchBar from './SearchBar';
import ChannelList from './ChannelList';
import type { StatusState, SearchBarState, ChannelListState } from '../constants/typeAliases';
import ChannelType from '../dataTypes/channelType';
import styles from './Navigation.scss';

const Navigation = ({
  status,
  searchBar,
  channelList,
  fetchChannels,
  selectChannel,
  toggleChannelList
}: {
  status: StatusState,
  searchBar: SearchBarState,
  channelList: ChannelListState,
  fetchChannels: () => void,
  selectChannel: (channel: ChannelType) => void,
  toggleChannelList: () => void
}) => (
  <div className={styles.navigation}>
    <Status
      thumbnail={status.thumbnail}
      title={status.title}
      toggleChannelList={toggleChannelList}
    />
    <SearchBar
      disabled={searchBar.disabled}
      placeholder={searchBar.placeholder}
      value={searchBar.value}
    />
    <ChannelList
      channels={channelList.channels}
      isFetching={channelList.isFetching}
      error={channelList.error}
      isOpen={channelList.isOpen}
      fetchChannels={fetchChannels}
      selectChannel={selectChannel}
      toggleChannelList={toggleChannelList}
    />
  </div>
);

export default Navigation;