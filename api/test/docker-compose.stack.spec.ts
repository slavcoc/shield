import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('Docker Compose full-stack parity', () => {
  const composeYaml = readFileSync(join(__dirname, '..', '..', 'docker-compose.yml'), 'utf8');

  it('contains core services for infra and backend', () => {
    expect(composeYaml).toContain('postgres:');
    expect(composeYaml).toContain('redis:');
    expect(composeYaml).toContain('api:');
  });

  it('contains website and admin frontend services for full-stack startup', () => {
    expect(composeYaml).toContain('website:');
    expect(composeYaml).toContain('admin:');
    expect(composeYaml).toContain('profiles:');
    expect(composeYaml).toContain('- fullstack');
  });
});