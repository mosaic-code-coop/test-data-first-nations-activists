# First Nations Activists Dataset

Real biographies of First Nations, Indigenous, Aboriginal, and tribal activists from around the world — packaged as test data for use in demos, fixtures, and test suites.

**Please read the [Cultural Notice](#-important-cultural-notice) before using this dataset.**

## Quickstart

```bash
npm install first-nations-activists-data @mosaic-code/test-data-factory
```

```typescript
import DataFactory from '@mosaic-code/test-data-factory';
import firstNationsActivistsData from 'first-nations-activists-data';

// The acknowledgment should come from a deliberate user opt-in, not be
// hardcoded. In CI/tests an env var works; in a UI, surface a
// confirmation prompt and pass its result. Without this set to true, the
// factory loads no data — your test suite still runs, just without this
// dataset included.
const factory = new DataFactory(firstNationsActivistsData, {
  acknowledgeDeceasedFirstNations: process.env.ACKNOWLEDGE_FIRST_NATIONS === 'true',
});

// Three random people for your test
const users = factory.getPeople(3);

// A specific person by id
const winona = factory.getPerson('winona-laduke');

// People in a particular group
const aim = factory.getPeopleInGroup('american-indian-movement');
```

For deterministic output across test runs, call `factory.setSeed(<number>)` first.

See the [framework README](https://github.com/mosaic-sunrise/test-data-api#readme) for the full DataFactory API.

## ⚠️ Important Cultural Notice

**This dataset contains names, images, and biographical information of deceased Indigenous persons.**

In keeping with Indigenous cultural protocols and values, we acknowledge that:

- Many Indigenous communities have specific cultural practices regarding the sharing of information about deceased persons
- Some communities may prefer that names, images, or stories of deceased ancestors not be shared publicly
- Each Indigenous culture has unique protocols around honoring and remembering those who have passed on

**If you are using this dataset and have concerns about cultural appropriateness or specific protocols that should be observed, please contact us immediately.**

Every effort has been made to present these individuals with dignity and respect, focusing on their public contributions to Indigenous rights and environmental justice. However, technical datasets cannot fully capture the cultural significance and protocols surrounding Indigenous knowledge keepers and activists.

---

## Purpose

This dataset contains biographical information about First Nations, Indigenous, Aboriginal, and tribal activists from around the world who have dedicated their lives to protecting Indigenous rights, traditional lands, and cultural heritage. These individuals have fought against colonization, environmental destruction, and the erasure of Indigenous knowledge systems.

## Historical Accuracy

All entries in this dataset are based on real people and documented historical events. If any of these entries contain factual errors, please let us know, or, ideally, create a Pull Request with a fix.

### Required Cultural Acknowledgment

**Applications using this dataset MUST include appropriate cultural acknowledgments and deceased persons notices before displaying any data.**

## Contributing

When adding new entries:

- Verify information through multiple historical sources
- Consult with relevant Indigenous communities when possible
- Follow cultural protocols for discussing deceased persons
- Use respectful language that centers Indigenous perspectives
- Include appropriate cultural context and terminology
- Ensure geographic diversity across Indigenous communities
- Test data must clearly indicate Indigenous identity and cultural affiliation

## Data Quality Requirements

- Biographical information must be substantial (100+ characters) and respectful
- Cultural markers must be present in tags or biographical content
- Contact information must use clearly fake `.test` domains and 555 phone numbers
- Reference links should point to reliable historical sources

## License

MIT License - See LICENSE file for details.

## Releasing

Use conventional commits for changes (prefix with `feat:`, `fix:`, `docs:`,
etc.):

```bash
# Preview changelog before release
npm run release:dry

# Release (updates changelog, bumps version, pushes, publishes)
npm run release:patch   # 0.1.0 → 0.1.1
npm run release:minor   # 0.1.0 → 0.2.0
npm run release:major   # 0.1.0 → 1.0.0
```
