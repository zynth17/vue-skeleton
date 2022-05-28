import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import VSkeleton from '../VSkeleton.vue';
interface Props {
	height?: string;
	width?: string;
	animation?: 'pulse' | 'wave';
	circle?: boolean;
	as?: string;
}
const wrapperFactory = (
	props: Props = {
		circle: false,
		animation: 'pulse',
		height: '15px',
		width: '150px',
		as: 'div',
	},
) => {
	return mount(VSkeleton, {
		props: props,
	});
};

describe('VSkeleton Component', () => {
	it('should not null component', () => {
		expect(VSkeleton).toBeTruthy();
	});

	it('should mount the component', () => {
		const wrapper = wrapperFactory();

		expect(wrapper.classes()).toContain('skeleton');
	});

	it('should have circle', () => {
		const wrapper = wrapperFactory({
			circle: true,
			width: '48px',
			height: '48px',
		});

		expect(wrapper.classes()).toContain('skeleton--circle');
	});

	it('should be a span skeleton', () => {
		const wrapper = wrapperFactory({
			as: 'span',
		});

		expect(wrapper).toMatchSnapshot();
	});
});
