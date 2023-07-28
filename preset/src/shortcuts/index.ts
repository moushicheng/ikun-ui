import type { Theme } from '@unocss/preset-uno';
import type { UserShortcuts } from 'unocss';
import { baseShortcuts } from './base';
import { commonShortcuts } from './common';
import { iconShortcuts } from './icon';
import { ButtonShortcuts } from './button';
import { callapseShortcuts } from './callapse';
import { checkboxShortcuts } from './checkbox';
import {drawerShortcuts} from "./drawer";
// 原子樣式的別名簡寫
export default [
	baseShortcuts,
	commonShortcuts,
	// icon
	iconShortcuts,
	// button
	ButtonShortcuts,
	// callapse
	callapseShortcuts,
	// checkbox
	checkboxShortcuts,
	// drawer
	drawerShortcuts
] as UserShortcuts<Theme>;

export function getSafeList() {
	const iconList = Object.keys(iconShortcuts);
	const buttonList = Object.keys(ButtonShortcuts);
	const callapseList = Object.keys(callapseShortcuts);
	const checkboxList = Object.keys(checkboxShortcuts);
	const drawerboxList = Object.keys(drawerShortcuts);
	return iconList
		.concat(drawerboxList)
		.concat(buttonList)
		.concat(callapseList)
		.concat(checkboxList);
}