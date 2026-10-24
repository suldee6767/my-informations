import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeSubdomain,
  getNetlifyBaseUrl,
  getProjectUrl,
  getProfileImageUrl,
  getProjectsList,
  validateContactForm,
  DEFAULT_NETLIFY_SUBDOMAIN,
} from './portfolio.ts';

test('normalizeSubdomain handles raw subdomains and URLs correctly', () => {
  assert.equal(normalizeSubdomain('nimble-clafoutis-ea587a'), 'nimble-clafoutis-ea587a');
  assert.equal(normalizeSubdomain('https://nimble-clafoutis-ea587a.netlify.app'), 'nimble-clafoutis-ea587a');
  assert.equal(normalizeSubdomain('[НЕТЛИФАЙ]'), DEFAULT_NETLIFY_SUBDOMAIN);
  assert.equal(normalizeSubdomain(''), DEFAULT_NETLIFY_SUBDOMAIN);
});

test('getNetlifyBaseUrl generates correct base URL', () => {
  assert.equal(getNetlifyBaseUrl('suldee-portfolio'), 'https://suldee-portfolio.netlify.app');
  assert.equal(getNetlifyBaseUrl(''), `https://${DEFAULT_NETLIFY_SUBDOMAIN}.netlify.app`);
});

test('getProjectsList returns exactly 4 projects with working URLs', () => {
  const projects = getProjectsList('nimble-clafoutis-ea587a');
  assert.equal(projects.length, 4);

  // Dream job must point to active working URL
  const dream = projects.find(p => p.id === 'dream-job');
  assert.ok(dream);
  assert.equal(dream.url, 'https://nimble-clafoutis-ea587a.netlify.app');

  // YouTube must point to the working YouTube site
  const yt = projects.find(p => p.id === 'my-youtube');
  assert.ok(yt);
  assert.equal(yt.url, 'https://glittering-speculoos-0b31d2.netlify.app');

  // All projects have cosmic images and stats
  projects.forEach(p => {
    assert.ok(p.cosmicImage);
    assert.ok(p.stats.label1);
    assert.ok(p.stats.value1);
  });
});

test('validateContactForm rejects invalid inputs and accepts valid inputs', () => {
  // Empty inputs
  const res1 = validateContactForm({});
  assert.equal(res1.isValid, false);
  assert.ok(res1.errors.name);
  assert.ok(res1.errors.email);
  assert.ok(res1.errors.message);

  // Invalid email
  const res2 = validateContactForm({
    name: 'Бат',
    email: 'not-an-email',
    message: 'Сайн байна уу, сайт гоё болжээ!',
  });
  assert.equal(res2.isValid, false);
  assert.ok(res2.errors.email);
  assert.equal(res2.errors.name, undefined);

  // Valid inputs
  const res3 = validateContactForm({
    name: 'Сүлдээ',
    email: 'suldee@example.com',
    message: 'Сайн байна уу, надтай холбогдоорой!',
  });
  assert.equal(res3.isValid, true);
  assert.deepEqual(res3.errors, {});
});
