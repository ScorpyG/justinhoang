import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const commitlintConfig: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	parserPreset: 'conventional-changelog-conventionalcommits',
	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
	rules: {
		'type-enum': [
			RuleConfigSeverity.Error,
			'always',
			[
				'feat', // New feature
				'fix', // Bug fix
				'docs', // Documentation changes
				'style', // Changes that do not affect the meaning of the code (white-space, formatting, etc.)
				'refactor', // Code changes that neither fix a bug nor add a feature
				'perf', // Performance improvement
				'test', // Adding missing tests or correcting existing tests
				'build', // Changes that affect the build system or external dependencies (example scopes: npm)
				'ci', // Changes to CI configuration files and scripts
				'chore', // Other changes that don't modify src or test files
				'revert', // Reverts a previous commit
			],
		],
		'scope-enum': [
			RuleConfigSeverity.Error,
			'always',
			[
				'setup', // Project setup
				'config', // Configuration files
				'deps', // Dependency updates
				'feature', // Feature-specific changes
				'bug', // Bug fixes
				'docs', // Documentation
				'style', // Code style/formatting
				'refactor', // Code refactoring
				'test', // Tests
				'build', // Build scripts or configuration
				'ci', // Continuous integration
				'release', // Release related changes
				'other', // Other changes
			],
		],
	},
};

export default commitlintConfig;
